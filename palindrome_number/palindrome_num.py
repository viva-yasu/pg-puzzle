num = 11
while True:
    c = str(num)
    b = str(bin(num))[2:]
    o = str(oct(num))[1:]
    if c == c[::-1] and b == b[::-1] and o == o[::-1]:
        break
    num += 2

print num