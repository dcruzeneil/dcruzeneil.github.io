import numpy as np
import random
from matplotlib import pyplot as plt

class LogisticRegression:
    def __init__(self, w = np.random.rand(DECIDER), loss_history = [], score_history = [], y_ = []):
        #initializing random weights 
        self.w = w
        self.history = history
        #the prediction labels
        self.y_ = y_
        
    def fit(self, X, y, alpha, epochs):
        
    def fit_stochastic(X, y):
        
    
    
    #choosing logistic loss as the loss function 
    def logistic_loss(y_hat, y):
        return -y * np.log(sigmoid(y_hat)) - (1 - y)*np.log(1 - sigmoid(y_hat))
    
    #defining relates sigmoid function
    def sigmoid(z):
        return 1 / (1 + np.exp(-z))
                
    #returning predictions for the current weight vector            
    def predict(self, X):
        return X@w
        
        
    #returning accuracy for current weight 
    def score(self, X, y):
        
    
    def loss(self, X, y):
        
    
    def draw_line(self, w, x_min, x_max):
        x = np.linspace(x_min, x_max, 101)
        y = -(w[0]*x + w[2])/w[1]
        plt.plot(x, y, color = "black")
    
  