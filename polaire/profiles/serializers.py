from .models import Address, Person, Company, Module

from rest_framework import serializers

import json


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

  
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    workers = PersonSerializer(many=True,read_only=True, source='person_set')
    address = AddressSerializer(read_only=False)
    class Meta:
        model = Company
        fields = '__all__'
        extra_fields = ['address', 'workers']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        return response

    def create(self, validated_data):
        address = validated_data.pop("address")
        address = Address.objects.create(**address)
        addressid = address.id
        address.save()
        validated_data["address_id"] = addressid
        company = Company.objects.create(**validated_data)
        company.save()
        return company

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

        ret["content"] = json.loads(instance.content)
        
        return ret

    def to_internal_value(self, instance):
        
        instance["content"] = json.dumps(instance.pop("content"))
        
        return super(ModuleSerializer, self).to_internal_value(instance)
    class Meta:
        model = Module
        fields = ['company', 'content', 'type']



