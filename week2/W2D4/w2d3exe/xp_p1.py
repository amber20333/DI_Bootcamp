# import the whole module
import tools
tools.do_something()
# import the whole module with alias
import tools as t
t.do_something()
# import specific func/class/etc from module
from tools import do_something
do_something()
# import specific func/class/etc from module with alias
from tools import do_something as ds
ds()