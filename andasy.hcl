# andasy.hcl app configuration file generated for volt on Monday, 24-Nov-25 15:59:16 EST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "volt"

app {

  env = {}

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "volt"
  }

}
