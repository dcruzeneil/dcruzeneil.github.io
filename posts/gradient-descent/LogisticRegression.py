import numpy as np
import random
from matplotlib import pyplot as plt

class LogisticRegression:
    def __init__(self, w = np.random.rand(3), loss_history = [], score_history = []):
        self.w = w
        
        #creating a copy of the initial weight vector - for visualization purposes
        self.initialW = w.copy()
        
        self.loss_history = loss_history
        self.score_history = score_history
        
    def fit(self, X, y, alpha, max_epochs):
        #creating modified feature matrix X_ with column of 1s
        X_ = np.append(X, np.ones((X.shape[0],1)), axis=1)
        
        #initializing the prev_loss as infinity  
        prev_loss = np.inf
        for i in range(max_epochs):
            
            #calculating the loss for the current weight vector
            new_loss = self.loss(X_, y)
            
            #updating the weight vector - the gradient descent update
            gradient = self.gradient_logistic_loss(X_, y)
            self.w -= alpha*gradient
            
            #using the complement nature of loss and score to update
            #the respective vectors - accuracy + loss = 1 
            self.loss_history.append(new_loss)
            self.score_history.append(1-new_loss)
            
            #checking the conditions to terminate the loop - when overall improvement is minimum
            if np.isclose(new_loss, prev_loss):
                break
            else: 
                prev_loss = new_loss
        
    def fit_stochastic(self, X, y, alpha, max_epochs, momentum = False):
        return 0 
    
    #defining related sigmoid function
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))
                
    #choosing logistic loss as the loss function l(w) - function 
    def logistic_loss(self, y_hat, y):
        return -y * np.log(self.sigmoid(y_hat)) - (1 - y)*np.log(1 - self.sigmoid(y_hat))
    
    #defining the gradient of the logistic loss function 
    def gradient_logistic_loss(self, X, y):
        #using the actual predictions - rather than 0s and 1s 
        #to utilize the potential of the exponential loss function
        y_hat = X@self.w
        return np.dot(self.sigmoid(y_hat) - y, X)/X.shape[0]

    #defining the empirical risk - Overall Loss - L(w) - function 
    def loss(self, X, y):
        #using the actual predictions - rather than 0s and 1s
        #to utilize the potential of the exponential loss function 
        y_hat = X@self.w
        return self.logistic_loss(y_hat, y).mean()
                
    #returning predictions for the current weight vector - {0,1}           
    def predict(self, X):
        #returning labels of - {0s, 1s} - for our reference 
        yTemp = X@self.w
        yPredVec = []
        for i in range(len(yTemp)):
            if(yTemp[i]>=0):
                yPredVec.append(1)
            else: 
                yPredVec.append(0)
        yPredVec = np.array(yPredVec)
        return yPredVec
    
    #returning accuracy for current weight 
    def score(self, X, y):
        currentScore = 1 - self.loss(X, y)
        return currentScore
    
    def draw_line(self, w, x_min, x_max):
        x = np.linspace(x_min, x_max, 101)
        y = -(w[0]*x + w[2])/w[1]
        plt.plot(x, y, color = "black")
    
  