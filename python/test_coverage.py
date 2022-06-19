import unittest
from .coverage import coverage_if, coverage_for, coverage_if_for
import datetime

class TestCoverage(unittest.TestCase):
  def test_coverage_if(self):
    self.assertTrue(coverage_if(55, 5) == "top left")
    self.assertTrue(coverage_if(18, 15) == "top right")
    self.assertTrue(coverage_if(60, -50) == "bottom left")
    self.assertTrue(coverage_if(25, -10) == "bottom right")

  def test_coverage_for(self):
    self.assertTrue(coverage_for(0) == 0)
    self.assertTrue(coverage_for(4) == 6)

  def test_coverage_if_for(self):
    self.assertTrue(coverage_if_for(0) == 0)
    self.assertTrue(coverage_if_for(2) == 0)
    self.assertTrue(coverage_if_for(6) == 12)

if __name__ == '__coverage__':
  unittest.coverage()
