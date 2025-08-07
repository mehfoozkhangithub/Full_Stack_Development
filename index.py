number_conversion = {
    'one' : 1, 
    'two' : 2, 
    'thousand' : 1000, 
    'million' : 1000000, 

}

string = input() 

ans = 1 

for item in string.split():
    ans *= number_conversion[item] 

print(ans) 
