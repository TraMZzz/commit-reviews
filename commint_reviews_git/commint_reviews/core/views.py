from annoying.decorators import render_to


@render_to('index.html')
def home(request):
    return {}
