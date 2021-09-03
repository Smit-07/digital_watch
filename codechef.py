try:
    class Palin():
        def __init__(self,n):
            self.n=n
            self.i=0
            self.palin=[0]*n
            self.prefix=[0]*n

        def add(self,v):
            self.palin[self.i]=v
            self.prefix[self.i]=v
            if self.i !=0:
                self.prefix[self.i] += self.prefix[self.i-1]
            self.i=self.i+1

        def fill(self):
            return self.i==self.n

        def rangedPrefix(self,l,r):
            return self.prefix[r]-self.prefix[l]

        def basePalindrome(self,l):
            return self.palin[l]


    def oddPalindrome(a):
        n=a
        pal=a
        n=n//10
        while n>0:
            pal=(pal*10)+(n*10)
            n=n//10
        return pal

    def makePalin(palin):
        i=1
        while not palin.fill():
            palin.add(oddPalindrome(i))
            i+=1

    def calculate(l,r,palin):
        power=palin.rangedPrefix(l-1,r-1)
        base=palin.basePalindrome(l-1)
        return pow(base,power,1000000007)

    palin=Palin(100001)
    makePalin(palin)

    t=int(input())
    while(t>0):
        l,r=map(int,input().split( ))
        print(calculate(l,r,palin))
        t -= 1

except:
    pass
