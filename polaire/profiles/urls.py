from django.urls import path, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'profiles', views.CompaniesViewSet)
router.register(r'modules/(?P<company>[^/.]+)', views.ModuleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]