import numpy as np
import random 

class PrimalSVM:
    def __init__(self, lamb):
        self.w = np.array([])
        self.loss_history = []
        self.score_history = []
        self.lamb = lamb
    
    #implementation of stochastic fit
    def fit(self, X, y, alpha, max_epochs, batch_size):
        #X_ = self.pad(X)
        X_ = X
        #initializing random weight vector = number of features
        self.w = np.random.rand(X_.shape[1])
        #adding loss+score associated with initialized weight vector
        self.loss_history.append(self.loss(X_, y))
        self.score_history.append(self.score(X_,y))
        
        #setting n as the number of rows in our feature matrix
        n = X_.shape[0]
        
        #maximum number of times we are cycling through the data - max_epochs
        for i in np.arange(max_epochs):
            #creating a list of all possible data points and shuffling
            order = np.arange(n)
            np.random.shuffle(order)
            
            for batch in np.array_split(order, n // batch_size + 1):
                x_batch = X_[batch,:]
                y_batch = y[batch]
                #performing the stochastic gradient
                gradient = self.gradient_hinge_loss(x_batch, y_batch)
                self.w -= (alpha * gradient)
            
            #appending the loss and score for the updated weight vector
            self.loss_history.append(self.loss(X_, y))
            self.score_history.append(self.score(X_, y))
            
            #checking the conditions to terminate the loop - when overall improvement is minimum
            if np.isclose(self.loss_history[-1], self.loss_history[-2]):
                break
        
    def hinge_loss(self, y_hat, y):
        return np.maximum(0, 1 - y * y_hat)
        
    def gradient_hinge_loss(self, X, y):
        y_hat = X@self.w
        tempVal = 1 * ((y_hat * y) < 1)
        '''
        output = np.zeros((X.shape[1],))
        for i in range(X.shape[0]):
            output+=np.dot(tempVal[i] ,np.dot(y[i], X[i]))
        output = output/X.shape[0]
        '''
        output = (self.lamb * self.w) - (X.T @ (tempVal * y) / X.shape[0]) 
        #return (self.lamb * self.w) - output
        return output
    
    def loss(self, X, y):
        y_hat = X@self.w
        hinge_loss = np.mean(self.hinge_loss(y_hat, y))
        #l2_norm = (self.lamb/2) * np.sqrt(np.sum(self.w ** 2))
        l2_norm = (self.lamb/2) * np.sum(self.w ** 2)
        return hinge_loss + l2_norm
    
    def predict(self, X):
        #returning labels of - {0s, 1s}
        yTemp = X@self.w
        return (1 * (yTemp >=0))
        
    def score(self, X, y):
        yHat = self.predict(X)
        return (1 * (yHat == y)).mean()
    
    def pad(self, X):
        #code to create modified feature matrix with column of 1s
        return np.append(X, np.ones((X.shape[0],1)), axis=1)