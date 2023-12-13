package tn.esprit.gestionski.services;
public class CourseStatistics {
    private int totalCourses;
    private double totalPrices;
    private double averagePrice;

    public CourseStatistics(int totalCourses, double totalPrices, double averagePrice) {
        this.totalCourses = totalCourses;
        this.totalPrices = totalPrices;
        this.averagePrice = averagePrice;
    }
    public int getTotalCourses() {
        return totalCourses;
    }
    public double getTotalPrices() {
        return totalPrices;
    }
    public double getAveragePrice() {
        return averagePrice;
    }
}
