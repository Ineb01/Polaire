from .models import Address, Person, Company, Module

from rest_framework import serializers

from images.serializers import ImageSerializer

import json


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

  
class PersonSerializer(serializers.ModelSerializer):
    picture = ImageSerializer(read_only=True)
    class Meta:
        model = Person
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    address = AddressSerializer(read_only=False)
    logo = ImageSerializer(default=None)
    class Meta:
        model = Company
        fields = '__all__'
        extra_fields = ['address']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        lead = Person.objects.filter(company=response['id']).filter(job='l').first()
        if(lead != None):
            response['worker'] = PersonSerializer(lead).data
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



