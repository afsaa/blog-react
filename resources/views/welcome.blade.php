<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Finanzas Saludables</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" id="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Blog de finanzas personales con autenticación usando React y Laravel"/>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
