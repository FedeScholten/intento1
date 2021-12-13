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
        <%! int num =89; double num2 = 34.8;
        double suma(){
            return num + num2;
        }
        %>
        <%
            String nombre = "Fede";
            String usuario = request.getParameter("usuario");
             out.println("<p>" + suma() + "</p>");
        %>
        <h1>Hola <%=nombre%></h1>
        <p><% java.util.Date fecha = new java.util.Date();%><%=fecha%></p>
    </body>
</html>
