from django.shortcuts import render


def index(request):
    title = 'geekshop'
    context = {
        'title': title,
    }
    return render(request, 'geekshop/index.html', context)


def contacts(request):
    title = 'контакты'
    context = {
        'title': title,
    }
    return render(request, 'geekshop/contacts.html', context)
