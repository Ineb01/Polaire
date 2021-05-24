from . import Adress, Person, Company

from rest_framework import serializers

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
    
