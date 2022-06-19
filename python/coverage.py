from fastapi import FastAPI

app = FastAPI()

@app.get("/coverage-if")
def coverage_if(x, y):
  print = ""
  if (x + y > 20):
    print = "top"
  else:
    print = "bottom"

  if (x > 50):
    print += " left"
  else:
    print += " right"
  return print

@app.get("/coverage-for")
def coverage_for(x):
  sum = 0
  for i in range(x):
    sum = sum + i

  return sum

@app.get("/coverage-if-for")
def coverage_if_for(x):
  sum = 0
  for i in range(x):
    if (i >= 3):
      sum += i
  return sum
