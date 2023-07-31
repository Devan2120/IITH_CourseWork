import matplotlib.pyplot as plt

X = [1, 1]

for i in range(20):
    n = X[i] + X[i+1]
    X.append(n)
print(X)
#plt.plot(X)
plt.stem(range(len(X)), X)
plt.grid()
plt.xlabel('$n$')
plt.ylabel('$x(n)$')
plt.tight_layout()
plt.savefig('../figs/q_2-2.png')
plt.show()