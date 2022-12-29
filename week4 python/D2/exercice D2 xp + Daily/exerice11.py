sandwich_orders = ['cheese', 'blt', 'egg', 'pastrami', 'pastrami', 'pastrami']
finished_sandwiches = []
while sandwich_orders.count('pastrami') > 0:
    sandwich_orders.remove('pastrami')
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
for finished in finished_sandwiches:
    print(f'made your {finished} sandwich')