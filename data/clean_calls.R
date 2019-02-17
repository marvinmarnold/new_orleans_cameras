working.dir <- ("/home/data/code/cameras/")
calls.all.csv <- "data/Calls_for_Service_2019.csv"
calls.clean.csv <- "src/data/calls.csv"
sample.frac <- 0.25

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
    Lat = as.numeric(substring(X, 2)),
    Lng = as.numeric(substring(Y, 2, nchar(Y) -1))
  ) %>%
  filter(!is.na(Lat)) %>% filter(!is.na(Lng)) %>%
  # select(NOPD_Item, TypeText, Lat, Lng) %>% 
  select(Lat, Lng) %>%
  sample_frac(sample.frac)

#colnames(calls.clean) <- c("Item Number", "Description", "Lat", "Lng")
colnames(calls.clean) <- c("Lat", "Lng")

write.csv(calls.clean, file = calls.clean.csv, row.names = FALSE)

# write.csv(calls %>% select(X, Y), file = paste0(calls.clean.csv, ".min"))
