<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>
    {{-- <script src="{{ mix('/js/manifest.js') }}" defer></script> --}}
    {{-- <script src="{{ mix('/js/vendor.js') }}" defer></script> --}}
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body class="relative antialiased bg-gray-100">
    @inertia
</body>
</html>
