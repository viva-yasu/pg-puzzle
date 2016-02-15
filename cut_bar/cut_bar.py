def cut_bar(m, n, current):
    if current >= n:
        return 0
    elif current < m:
        return 1 + cut_bar(m, n, current * 2)
    else:
        return 1 + cut_bar(m, n, current + m)

print cut_bar(3, 20, 1)
print cut_bar(5, 100, 1)