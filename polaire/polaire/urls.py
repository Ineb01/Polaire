"""polaire URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView

from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.base import TemplateView

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('profiles/', include('profiles.urls')),
    path('admin/', admin.site.urls),
    url(r'^api-token-auth/', obtain_jwt_token),
    
    url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home")
]