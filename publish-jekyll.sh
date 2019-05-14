#!/bin/bash
bundle exec jekyll build
echo "Site bundled..."
cd ~
echo "cd to home directory"
cd /Users/cody/Desktop/CS178/
echo "cd to /Users/cody/Desktop/CS178/"
echo "ssh into server"
ssh -tt -i "DrakeCS178keypair.pem" ec2-user@ec2-3-86-197-52.compute-1.amazonaws.com <<EOT
cd /var/www/html/
ls
sudo rm -rf /var/www/html/*
exit
EOT
echo "Copy site files to server"
sudo scp -rp -i "DrakeCS178keypair.pem" /Users/cody/Documents/Comp-Sci/WorkSpace/jekyll-p5-site/_site/*  ec2-user@ec2-3-86-197-52.compute-1.amazonaws.com:
ssh -tt -i "DrakeCS178keypair.pem" ec2-user@ec2-3-86-197-52.compute-1.amazonaws.com <<EOT
sudo mv * /var/www/html
exit
EOT

echo "Publishing Complete!" <<EOF
EOF
