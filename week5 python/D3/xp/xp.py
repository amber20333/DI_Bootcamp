# exerice 1 

# function takes a user input, and because data from input is recieved
#  as string the int() function casts it into an integer,
# finally the abs() function returns the absolute value of the
# negative int  '''

# def result ():

#     user_num = int(input('enter negtive number: '))
#     print(f'Absolute value of  {user_num}  is: {abs(user_num)}') 

#     print(result.__doc__)

# exercice 2 

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
     return f'{self.amount}'

    def __int__(self):
      return self.amount

    def __repr__(self):
        return f'{self.amount} {self.currency} '
    
    def __add__(self, otherAmount):
      return  (self.amount + otherAmount.amount)
    # or print(c1.__add__(self.amount)

    def __add__(self, other):
       return (self.amount + other.amount)
    #    print(c1.__add__(c2))

       
    #    >>> 5 dollars   >>> print(c1)
       
     
    def __iadd__(self , other ):
         self.amount += int(other)
         return self

#  >>> c1 += 5
# >>> c1
# 10 dollars


def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == (other.currency):
                 return self.amount + int(other.amount)
            else:
                raise TypeError('Cannot add between Currency type shekel and dollar')
        else:
            return self.amount + int(other)
    




c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)


print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)