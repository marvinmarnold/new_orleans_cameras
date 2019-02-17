setwd("/media/sf_oipm/code/cameras/")
library(dplyr)
library(tidyr)
library(stringr)

# Load camera data from stopwatchingnola.org
cameras.csv <- "data/stopwatchingnola_20181230.csv"
cameras <- read.csv(cameras.csv)
head(cameras)

write.csv(cameras %>% select(X, Y), file = "data/cameras.csv.min")

# Load NOPD's calls for service from data.nola.gov
dirty.csv <- "data/Calls_for_Service_20181230.csv"
dirty <- read.csv(dirty.csv)
head(dirty)

calls <- dirty %>% 
  separate(Location, c("X", "Y"), ",") %>%
  mutate(
    X = substring(X, 2),
    Y = substring(Y, 1, nchar(Y) -1)
  )
write.csv(calls, file = "data/calls_clean.csv")
write.csv(calls %>% select(X, Y), file = "data/calls_clean.csv.min")
