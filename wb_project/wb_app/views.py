import json

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render

def login_view(request):
    if request.method == 'POST':
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error_message': 'Invalid username or password'})


@login_required
def logout_view(request):
    logout(request)
    return JsonResponse({'success': True})


def registration(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data['username'] == '' or data['password'] == '':
            return JsonResponse({'success': False, 'message': 'Введите имя пользователя и пароль!'})
        try:
            user = User.objects.create_user(
                username=data['username'],
                email=data['email'],
                password=data['password']
            )
            user.save()
            return JsonResponse({'success': True, 'message': 'Пользователь успешно зарегистрирован'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': 'Не удалось зарегистрировать нового пользователя'})
    elif request.method == 'GET':
        return render(request, 'registration.html')





def start_page(request):
    context = {}
    return render(request, 'start_page.html', context=context)





def my_account_view(request):
    context = {}
    return render(request, 'my_profile.html', context=context)
