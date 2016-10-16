#!/c/Python27/python
import SimpleHTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler
import SocketServer
import urlparse
import os
import re

PORT = 8001

class Router(object):

    def __init__(self, server):
        self.__routes = []
        self.__server = server

    def addRoute(self, regexp, controller, action):
        self.__routes.append({'regexp': regexp, 'controller': controller, 'action': action})

    def route(self, path):
        for route in self.__routes:
            if re.search(route['regexp'], path):
                cls = globals()[route['controller']]
                func = cls.__dict__[route['action']]
                obj = cls(self.__server)
                apply(func, (obj, ))
                return

        # Not found
        self.__server.send_response(404)
        self.__server.end_headers()


class MyRequestHandler(BaseHTTPRequestHandler):

    def __init__(self, request, client_address, server):

        routes = [
            {'regexp': r'^/$', 'controller': 'RestController', 'action': 'indexAction'},
            {'regexp': r'^/servers', 'controller': 'RestController', 'action': 'getServers'},
            {'regexp': r'^/test', 'controller': 'RestController', 'action': 'getTest'}
        ]

        self.__router = Router(self)
        for route in routes:
            self.__router.addRoute(route['regexp'], route['controller'], route['action'])

        BaseHTTPRequestHandler.__init__(self, request, client_address, server)

    def do_GET(self):
        self.__router.route(self.path)


class RestController(MyRequestHandler):

    def __init__(self, server):
        self.server = server

    def getServers(self):
        self.server.send_response(200)
        self.server.send_header('Content-type', 'application/json')
        self.server.end_headers()
        f = open("./api/servers.json", 'rb')
        self.server.wfile.write(f.read())
        f.close()

    def getTest(self):
        self.server.send_response(200)
        self.server.send_header('Content-type', 'text/html')
        self.server.end_headers()
        self.server.wfile.write('Testing writing a string..')


def main():
    try:
        httpd = SocketServer.TCPServer(('', PORT), MyRequestHandler)
        print "serving at port", PORT
        httpd.serve_forever()
    except:
        print 'Server shutting down'
        httpd.socket.close()


if __name__ == '__main__':
    main()
