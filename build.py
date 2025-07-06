'''DEPOIS TROCAR ISSO PARA UM SCRIPT JS'''

import os
import subprocess

# cria arquivo .env com variavel token vazia, se o arquivo não existir
if not os.path.exists('.env'):
    with open('.env', 'w') as fw:
        fw.write('TOKEN = ""')

subprocess.run(["npm", "install"])