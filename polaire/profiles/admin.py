from django.contrib import admin

from .models import Company, Person, Adress, Module

class AdressAdmin(admin.StackedInline):
    model = Adress

class PersonAdmin(admin.StackedInline):
    model = Person

class CompanyAdmin(admin.ModelAdmin):
    inlines = [AdressAdmin, PersonAdmin]

class PersonAdmin(admin.ModelAdmin):
    fieldsets = [
        (None , {'fields': ['title_first', 'first_name', 'last_name', 'title_last', 'works_at', 'sex', 'picture', 'phone', 'mail']}),
    ]


class ModuleAdmin(admin.ModelAdmin):
    model = Module


admin.site.register(Company, CompanyAdmin)

admin.site.register(Module, ModuleAdmin)