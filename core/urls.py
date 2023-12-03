from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('notify/', include('tg_message_sender.urls')),
    path("__reload__/", include("django_browser_reload.urls"))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT) + static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# else:
#      urlpatterns += [
#          re_path(f'^{settings.MEDIA_URL.lstrip("/")}(?P<path>.*)$',
#             mediaserve, {'document_root': settings.MEDIA_ROOT}),
#          re_path(f'^{settings.STATIC_URL.lstrip("/")}(?P<path>.*)$',
#             mediaserve, {'document_root': settings.STATIC_ROOT}),
#          ]

admin.site.site_header = "Панель администрирования"
admin.site.index_title = "Информация"