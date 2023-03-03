package com.nba.schedule.nbaschedule;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleController {
    
    @Autowired
    Scraper scraper;

    @GetMapping("/schedule")
    List<Match> getSchedule(){
        return scraper.getSchedule();
    }
}
