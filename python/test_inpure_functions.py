import unittest
from .inpure_functions import generate_otp, format_today, generate_guid
import datetime

class TestMain(unittest.TestCase):
  def test_generate_otp(self):
    # assert generate_otp(4, 2549) == "2549"
    # 4 digits 
    self.assertTrue(generate_otp(4, 0.2549) == "2549")
    self.assertTrue(generate_otp(4, 0.163) == "1630")
    self.assertTrue(generate_otp(4, 0.74917) == "7492")
    self.assertTrue(generate_otp(4, 0.48791) == "4879")
    self.assertTrue(generate_otp(4, 0.385949) == "3859")

    # self.assertTrue(len(generate_otp(4)) == 4)


  def test_format_today(self):
    self.assertTrue(format_today(datetime.date(1993, 10, 9)) == "1993-10-9")
    self.assertTrue(format_today(datetime.date(2021, 6, 1)) == "2021-6-1")
    self.assertTrue(format_today(datetime.date(2021, 1, 30)) == "2021-1-30")
    self.assertTrue(format_today(datetime.date(2007, 7, 1)) == "2007-7-1")


  def test_generate_guid(self):
    guid = generate_guid()
    # https://stackoverflow.com/questions/47230521/why-is-the-17th-digit-of-version-4-guids-limited-to-only-4-possibilities
    self.assertTrue(len(guid) == 36)
    self.assertTrue(guid[14] == "4")

    generate19 = guid[19]
    number19 = int("0x" + generate19, 16)
    self.assertGreaterEqual(number19, 8)
    self.assertLessEqual(number19, 11)

if __name__ == '__inpure_functions__':
  unittest.inpure_functions()
