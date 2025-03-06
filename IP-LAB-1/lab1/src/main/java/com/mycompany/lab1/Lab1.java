/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

/* package com.mycompany.lab1; */

/**
 *
 * @author rober
 */

interface Vehicle {
    void displayCarInfo();
    public String getModel();
    public String getDriver();
    public String[] getPassengers();
}

abstract class Car implements Vehicle {
    private String model;
    private String driver;
    private String[] passengers;
    private int passCount;
    
    public Car(String model, String driver) {
        this.model = model;
        this.driver = driver;
        this.passengers = new String[3];
        this.passCount = 0;
    }
    
    @Override
    public String getModel() {
        return model;
    }

    @Override
    public String getDriver() {
        return driver;
    }

    @Override
    public String[] getPassengers() {
        return passengers;
    }
    
    public void addPassenger(String passenger) {
        if (passCount < passengers.length) {
            passengers[passCount++] = passenger;
        } else {
            System.out.println("Car is full! Cannot add more passengers.");
        }
    }
    
    public void fuel (int capacity) {
        System.out.println("Fueled with " + capacity + " liters.");
    }
       
    public void fuel (String type) {
        System.out.println("Fueled with " + type + ".");
    }
}

class ElectricCar extends Car {
    private int batteryCap;
    
    public ElectricCar(String model, String driver, int capacity) {
        super(model, driver);
        this.batteryCap = capacity;
    }
    
    @Override
    public void displayCarInfo() {
        System.out.println("Electric car - Brand" + getModel() + " - Driver: " + getDriver() + " - Battery capacity: " + batteryCap + "kWh.");
    }

}

class CombustionCar extends Car {
    private int fuelCap;
    
    public CombustionCar(String model, String driver, int capacity) {
        super(model, driver);
        this.fuelCap = capacity;
    }

    @Override
    public void displayCarInfo() {
        System.out.println("Fuel car - Brand" + getModel() + " - Driver: " + getDriver() + " - Fuel capacity: " + fuelCap + "kWh.");
    }

}


public class Lab1 {

    public static void main(String[] args) {
        Vehicle Tesla = new ElectricCar("Tesla", "Elon", 100);
        Vehicle Dacia = new CombustionCar("Dacia", "Ion", 50);

        ((Car) Tesla).addPassenger("John");
        ((Car) Dacia).addPassenger("Gelu");

        ((Car) Tesla).addPassenger("James");
        ((Car) Dacia).addPassenger("Gheorghe");

        displayCarDetails(Tesla);
        displayCarDetails(Dacia);
    }
        public static void displayCarDetails(Vehicle Car)
        {
            Car.displayCarInfo();
            System.out.println("Passengers: " );
            for(String passenger : Car.getPassengers())
            {
               if (passenger != null)
               {
                   System.out.println(passenger + " ");
               }
            }
            System.out.println();
        }

}
