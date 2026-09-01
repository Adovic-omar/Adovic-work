"""
Object oriented programming.
JS ,Python ,C++,JAVA ,etc.

Concept in programming to make
work easy by using principles.
1.Encapsulation
    -keeping data and methods(functions) inside a class
     while restricting direct access to internal data.
2.Abstraction
    -hiding unnecessary complexity or implimentation of details.
3.Inheritance
    -one class to reuse or extend properties
     and methods of another class
4.Polymorphism
    -appearing in different forms. Method can
     have different behaviours.

_____________________________

JS and python are object oriented.
=> number.toString() ,string.toLowerCase()
"""

"""
=> class ->
    -Blueprint for an object.

=> Class config is an architectural drawing of a house.
    object -> implementation of the drawing.
"""

#is to have the name Capitalized
#fields <properties>
class House:
    bedrooms=3
    bathrooms=2
    floors=1
    area=120
    owner=""
    location=""
    architect="KIMANI"

    def config(self,owner,location):
        self.owner=owner
        self.location=location

    def print_self(self):
        #this <object itself> self<object>
        print(self)
        print(self.__dict__) #dictionary print all properties


#When access object properties use dot notation
#Bracket notation is for dictionary

#=> method ,config ->
#=> print_house

machine_house=House()
# machine_house.owner="Macrine"
# machine_house.location="Kikuyu"
machine_house.config(owner="Macrine",location="kikuyu")
print(f"Macrines House Owner {machine_house.owner}")
print(f"Macrines Location {machine_house.location}")
print(f"Macrines House Bedrooms {machine_house.bedrooms}")
print(f"Macrines House Bathroom {machine_house.bathrooms}")
print(f"Macrines House Bedrooms {machine_house.floors}")
print(f"Macrines House area {machine_house.area}")
print(f"Macrines House Designer {machine_house.architect}")
print("Printing macrines house")
machine_house.print_self()
print("End of print macrines")


daniel_house=House()
# daniel_house.owner="Daniel"
# daniel_house.location="Muranga"
daniel_house.config(owner="Daniel",location="Muranga")
print(f"Daniels House Owner {daniel_house.owner}")
print(f"Daniels Location {daniel_house.location}")
print(f"Daniels House Bedrooms {daniel_house.bedrooms}")
print(f"Daniels House Bathroom {daniel_house.bathrooms}")
print(f"Daniels House Floors {daniel_house.floors}")
print(f"Daniels House area {daniel_house.area}")
print(f"Daniels House Designer {daniel_house.architect}")
print("Printing daniels house")
daniel_house.print_self()
print("End of print macrines")