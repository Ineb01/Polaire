from django.contrib import admin

from profiles.models import Company, Person

# Register your models here.
class CompanyAdmin(admin.ModelAdmin):
    fieldsets = [
        (None , {'fields': ['name', 'logo', 'company_type', 'phone', 'mail', 'adress', 'country', 'business', 'validated', 'link_social_media' ]}),
    ]

class PersonAdmin(admin.ModelAdmin):
    fieldsets = [
        (None , {'fields': ['title_first', 'first_name', 'last_name', 'title_last', 'works_at', 'sex', 'picture', 'phone', 'mail']}),
    ]


admin.site.register(Company, CompanyAdmin)
admin.site.register(Person, PersonAdmin)