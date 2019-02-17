working.dir <- ("/home/data/code/cameras/")
calls.all.csv <- "data/Calls_for_Service_2019.csv"
calls.clean.csv <- "src/data/calls.csv"

library(dplyr)
library(stringr)
library(tidyr)

setwd(working.dir)
calls.all <- read.csv(calls.all.csv)

# Parse out the latitude and longitude as Y and X
# Only select a few columns, in order to reduce filesize
calls.clean <- calls.all %>% 
  separate(Location, c("X", "Y"), ",") %>%
  mutate(
    Lat = substring(X, 2),
    Lng = substring(Y, 1, nchar(Y) -1)
  ) %>% 
  select(NOPD_Item, TypeText, Lat, Lng)

write.csv(calls.clean, file = calls.clean.csv, row.names = FALSE)

# write.csv(calls %>% select(X, Y), file = paste0(calls.clean.csv, ".min"))
