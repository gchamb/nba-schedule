package com.nba.schedule.nbaschedule;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import com.nba.schedule.nbaschedule.Match.MatchBuilder;


@Service
public class Scraper {
    public List<Match> getSchedule(){
       try {
            Document doc =  Jsoup.connect("https://www.cbssports.com/nba/schedule/").get();
            Elements teams = doc.select(".TeamName");
            List<String> times = doc.select(".CellGame").eachText();
            
            // List of builder classes
            List<MatchBuilder> matchBuilders = new ArrayList<>();
            List<Match> matches = new ArrayList<>();
                
            for (int i = 0; i < teams.size(); i+=2){
            
            MatchBuilder builder = new MatchBuilder().Create();
            // add team one and team two
            builder.setOne(teams.get(i).text())
                    .setTwo(teams.get(i+1).text());

            matchBuilders.add(builder);
            }

            // add time then build the match
            for (int i = 0; i < matchBuilders.size() && i < teams.size(); i++){
                Match match = matchBuilders.get(i).setTime(times.get(i)).build();
                matches.add(match);
            }
                
            return matches;
        } catch (IOException e) {
            return null;
        }
        
    }
}

