"""
Main view of the project. Returns HTML with CSS and JS connected to it.
"""

from django.shortcuts import render
from service_data.models import MenuItem, SocialLinkData
from .models import AboutMe, Service, Diploma
from services.convert_query_to_list import convert_query_to_list


def index(request):
    """
    View get data from database using convert_query_to_list function and returns
    HTML template using Django templates.
    :param request:
    :return: HttpResponse(templates)
    """

    menu_list = convert_query_to_list(MenuItem)
    social_links_list = convert_query_to_list(SocialLinkData)
    about_me = AboutMe.objects.get(pk=1)
    print(about_me.about_photo)
    services = convert_query_to_list(Service)
    diplomas = convert_query_to_list(Diploma)
    context = {
        'menu_list': menu_list,
        'social_links_list': social_links_list,
        'about_me': about_me,
        'services': services,
        'diplomas': diplomas,
    }
    return render(request, 'main/index.html',
                  context=context)
