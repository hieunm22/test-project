from fastapi import FastAPI
from math import pow
import random
import datetime

app = FastAPI()

@app.get("/generate-otp")
def generate_otp(length, random_number = None):
  """Generates random number as OTP with length specified"""
  length_num = int(length)
  pow10 = 10 ** length_num
  rand = 0

  if (random_number is None):
    rand = random.uniform(0, 1)
  else:
    rand = random_number

  rand = round(rand * pow10)
  rand_str = str(rand)  #.zfill(length_num)
  if (len(rand_str) > length_num):
    rand_str = rand_str[0:length_num]
  
  return rand_str

@app.get("/format-date")
def format_today(format_date = None):
  """Format a datetime object to string as format yyyy-M-d"""
  today = datetime.datetime.now() if format_date == None else format_date

  return str(today.year) + "-" + str(today.month) + "-" + str(today.day)

def map(c):
  r = random.randint(0, 16)
  v = r if c == "x" else ((r & 0x3) | 0x8)
  return hex(v)[-1]

@app.get("/generate-guid")
def generate_guid():
  """Generates a random guid v4"""
  # https://stackoverflow.com/questions/47230521/why-is-the-17th-digit-of-version-4-guids-limited-to-only-4-possibilities
  line = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  append = ""
  for c in line:
    if c == "-" or c == "4":
      append = append + c
      continue
    hexa = map(c)
    append = append + hexa

  return append
  