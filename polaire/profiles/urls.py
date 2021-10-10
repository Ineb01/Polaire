from django.urls import path, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'profiles', views.CompaniesViewSet)
router.register(r'workers/company/(?P<company>[^/.]+)', views.PersonViewSetFiltered)
router.register(r'workers', views.PersonViewSet)
router.register(r'modules/company/(?P<company>[^/.]+)', views.ModuleViewSetFiltered)
router.register(r'modules', views.ModuleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]