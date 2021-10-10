from django.contrib import admin

from .models import Company, Person, Address, Module

class AddressAdmin(admin.ModelAdmin):
    model = Address

class PersonAdmin(admin.ModelAdmin):
    model = Person

class CompanyAdmin(admin.ModelAdmin):
    model = Company

class ModuleAdmin(admin.ModelAdmin):
    model = Module


admin.site.register(Company, CompanyAdmin)

admin.site.register(Module, ModuleAdmin)

admin.site.register(Address, AddressAdmin)
admin.site.register(Person, PersonAdmin)