from django.contrib import admin
from .models import AboutMe, Service, Diploma, SocialLinkData

admin.site.register(AboutMe)



@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')
    ordering = ('id',)


@admin.register(Diploma)
class DiplomaAdmin(admin.ModelAdmin):
    list_display = ('id', 'diploma_name')
    list_display_links = ('id', 'diploma_name')
    ordering = ('id',)


@admin.register(SocialLinkData)
class SocialLinkDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'link_name', 'link_to', 'link_visible_data')
    list_display_links = ('id', 'link_name')
    ordering = ('id',)
