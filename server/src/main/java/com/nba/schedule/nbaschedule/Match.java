package com.nba.schedule.nbaschedule;

public class Match {
    private final String one;
    private final String two;
    private final String time;

    public Match(MatchBuilder builder){
        one = builder.one;
        two = builder.two;
        time = builder.time;
    }

    @Override
    public String toString() {
        return """
                one: %s,
                two: %s,
                time: %s
                """.formatted(one, two,time);
    }

    public String getOne() {
        return one;
    }
    public String getTwo() {
        return two;
    }
    public String getTime() {
        return time;
    }


    public static class MatchBuilder {
        private String one;
        private String two;
        private String time;

        public MatchBuilder Create(){
            return new MatchBuilder();
        }

        public MatchBuilder setOne(String one) {
            this.one = one;
            return this;
        }

        public MatchBuilder setTime(String time) {
            this.time = time;
            return this;
        }

        public MatchBuilder setTwo(String two) {
            this.two = two;
            return this;
        }

        public Match build(){
            return new Match(this);
        }

    }


}