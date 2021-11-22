<%-- 
    Document   : ventas
    Created on : 10 nov. 2021, 17:05:39
    Author     : fedes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String nombre = "Fede";
            String usuario = request.getParameter("usuario");
        %>
        <h1>Hola <%=nombre%></h1>
    </body>
</html>
