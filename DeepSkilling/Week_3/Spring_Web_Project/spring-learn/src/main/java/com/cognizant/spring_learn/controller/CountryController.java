package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("START");

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = (Country) context.getBean("in");

        context.close();

        LOGGER.info("END");

        return country;
    }
}