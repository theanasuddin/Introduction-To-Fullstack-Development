# **Introduction To Full Stack Development**

Welcome to the course!  
Please read this README fully before starting the exercises.

----------

## Repository & Exercises

This is your personal repository for the course exercises.

-   The **first exercise round** is already included in this repository.
-   Future exercise rounds must be **pulled from the course upstream** (see Plussa exercise _“Setting upstream”_).
-   Exercise directories follow the format:  
    `exercises/XX_desc` where **XX** is the exercise round number.

### **General workflow**

1.  Pull instructions from the course upstream (not needed for round 1).
2.  Complete the exercises.
3.  Save your work:
    
    ```bash
    git add FILE
    git commit -m "message"
    git push
    
    ```
    
4.  Submit your **Repository SSH URL** to Plussa.
5.  Plussa automatically grades your submission and provides feedback.

----------

## Required Tools: Git, Node.js, MongoDB

To complete the exercises, you need:

-   **Git**
-   **Node.js**
-   **MongoDB**

You may install these using one of the following approaches:

### **Option 1 — Vagrant Virtual Environment**

The repository includes Vagrant configuration files that set up a full development environment with Node.js and MongoDB.

> **Note:** Vagrant works only on **x86** machines.  
> If you’re using Apple Silicon, Vagrant is not supported.

### **Option 2 — Local Installation**

You can install Node.js directly on your machine.  
Instructions are provided under _“Direct install of Node to your own machine”_ below.

----------

## Using Vagrant for Your Development Environment

From the [Vagrant Introduction](https://www.vagrantup.com/intro):

> _“Vagrant is a tool for building and managing virtual machine environments in a single workflow…”_

### **Step 1 — Install prerequisites**

-   Install **VirtualBox**  
    [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
-   Install **Vagrant**  
    [https://www.vagrantup.com/downloads](https://www.vagrantup.com/downloads)

### **Step 2 — Start the environment**

In the root directory (where the `Vagrantfile` is located):

```bash
vagrant help
vagrant up

```

> The first run may take a long time — it downloads Ubuntu and installs all dependencies.

### **Step 3 — Access the environment**

```bash
vagrant ssh
cd /webdev1

```

All repository files are available inside `/webdev1`.

### **Ports**

-   Node.js → **3000**
-   MongoDB → **27017**

You can access your Node server at:  
`http://localhost:3000`

### **Managing the VM**

```bash
vagrant halt     # shut down
vagrant destroy  # delete the VM

```

### **Common Vagrant Issues**

#### **Windows symlink errors**

Use:

```
--no-bin-links

```

References:  
[https://github.com/npm/npm/issues/7308](https://github.com/npm/npm/issues/7308)  
[http://perrymitchell.net/article/npm-symlinks-through-vagrant-windows/](http://perrymitchell.net/article/npm-symlinks-through-vagrant-windows/)

#### **Host-only network IP error (Linux/macOS/Solaris)**

Create `/etc/vbox/networks.conf` with:

```
* 10.0.0.0/8 192.168.0.0/16
* 2001::/64

```

More info:  
`https://www.virtualbox.org/manual/ch06.html#network_hostonly` [(virtualbox.org in Bing)](https://www.bing.com/search?q=%22https%3A%2F%2Fwww.virtualbox.org%2Fmanual%2Fch06.html%23network_hostonly%22)

----------

## Direct Install of Node.js (Without Vagrant)

### **Linux**

```bash
node -v
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh -o install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm install 14.9.0
nvm use 14.9.0
node -v

```

### **Windows**

Follow Microsoft’s official guide:  
[https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows)