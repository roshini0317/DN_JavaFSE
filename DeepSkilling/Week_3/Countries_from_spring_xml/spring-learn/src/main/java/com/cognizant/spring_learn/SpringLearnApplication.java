//Author: V Roshini
package com.cognizant.spring_learn;
import java.util.List;
import com.cognizant.spring_learn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");
        displayCountries();
        LOGGER.info("End");
    }

    public static void displayCountries() {
        LOGGER.info("Inside displayCountries()");
        ClassPathXmlApplicationContext context =new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries =(List<Country>) context.getBean("countryList");
        LOGGER.info("Size = {}", countries.size());
        for (Country country : countries) {
            LOGGER.info("{}", country);
        }
        context.close();
    }
}