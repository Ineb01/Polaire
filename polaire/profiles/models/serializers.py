from . import Adress, Person, Company, Module

from rest_framework import serializers

import json


class AdressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adress
        fields = '__all__'

  
class PersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    adress = AdressSerializer(many=True, read_only=True, source='adress_set')
    worker = PersonSerializer(many=True, read_only=True, source='person_set')

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['adress'] = AdressSerializer(Adress.objects.filter(company=instance)[0]).data
        response['worker'] = PersonSerializer(Person.objects.filter(company=instance)[0]).data
        return response

    class Meta:
        model = Company
        fields = '__all__'
        extra_fields = ['adress', 'worker']

    def get_field_names(self, declared_fields, info):
        expanded_fields = super(CompanySerializer, self).get_field_names(declared_fields, info)

        if getattr(self.Meta, 'extra_fields', None):
            return expanded_fields + self.Meta.extra_fields
        else:
            return expanded_fields
    
class ModuleSerializer(serializers.ModelSerializer):

    content = serializers.JSONField()

    def to_representation(self, instance):
        ret = super(ModuleSerializer, self).to_representation(instance)
        # check the request is list view or detail view
        is_list_view = isinstance(self.instance, list)
        content = json.loads('{"content":'+instance.content+"}")
        ret.pop("content")
        ret.update(content)
        
        return ret
    class Meta:
        model = Module
        fields = ['company', 'content', 'type']



