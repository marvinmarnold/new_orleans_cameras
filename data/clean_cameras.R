working.dir <- ("/home/data/code/cameras/")
cameras.all.csv <- "data/StopWatchingNola.csv"
cameras.clean.csv <- "src/data/cameras.csv"

library(dplyr)

setwd(working.dir)
cameras.all <- read.csv(cameras.all.csv)

cameras.clean <- cameras.all %>% 
  filter(!is.na(X)) %>% filter(!is.na(Y)) %>%
  mutate(Lat = Y, Lng = X) %>%
  select(Location.Code, MonitoredSchool, Lat, Lng)

colnames(cameras.clean) <- c("Camera", "Description", "Lat", "Lng")

write.csv(cameras.clean, cameras.clean.csv, row.names=FALSE)
