---
title: "Custom Plan"
draft: false

product:
  id: "custom-plan"
  name: "Custom Plan"
  price: "10.00"

  customFields:
    ram:
      name: "RAM"
      type: "dropdown"
      value: "2GB"
      options: 
        - value: "1GB"
          price: "1.00"

        - value: "2GB"
          price: "2.00"

        - value: "3GB"
          price: "3.00"

        - value: "4GB"
          price: "4.00"

        - value: "5GB"
          price: "5.00"

        - value: "6GB"
          price: "6.00"

        - value: "7GB"
          price: "7.00"

        - value: "8GB"
          price: "8.00"

    amd:
      name: "AMD CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "1CPU"
          price: "1.00"

        - value: "2CPU"
          price: "2.00"

        - value: "3CPU"
          price: "3.00"

        - value: "4CPU"
          price: "4.00"

        - value: "5CPU"
          price: "5.00"

        - value: "6CPU"
          price: "6.00"

        - value: "7CPU"
          price: "7.00"

        - value: "8CPU"
          price: "8.00"

    arm:
      name: "ARM CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "1CPU"
          price: "1.00"

        - value: "2CPU"
          price: "2.00"

        - value: "3CPU"
          price: "3.00"

        - value: "4CPU"
          price: "4.00"

        - value: "5CPU"
          price: "5.00"

        - value: "6CPU"
          price: "6.00"

        - value: "7CPU"
          price: "7.00"

        - value: "8CPU"
          price: "8.00"

    ems:
      name: "Extra: Minecraft Server"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "4"
          price: "4.00"

        - value: "8"
          price: "8.00"

        - value: "12"
          price: "12.00"

        - value: "16"
          price: "16.00"

        - value: "18"
          price: "18.00"

        - value: "22"
          price: "22.00"

    evs:
      name: "Extra: VPS Server"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "4"
          price: "4.00"

        - value: "8"
          price: "8.00"

        - value: "12"
          price: "12.00"

        - value: "16"
          price: "16.00"

        - value: "18"
          price: "18.00"

        - value: "22"
          price: "22.00"


    ewh:
      name: "Extra: Web Hosting"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "4"
          price: "4.00"

        - value: "8"
          price: "8.00"

        - value: "12"
          price: "12.00"

        - value: "16"
          price: "16.00"

        - value: "18"
          price: "18.00"

        - value: "22"
          price: "22.00"


    eds:
      name: "Extra: Database Server"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "4"
          price: "4.00"

        - value: "8"
          price: "8.00"

        - value: "12"
          price: "12.00"

        - value: "16"
          price: "16.00"

        - value: "18"
          price: "18.00"

        - value: "22"
          price: "22.00"


    eps:
      name: "Extra: Proxy Server"
      type: "dropdown"
      value: "0"
      options:
        - value: "0"
          price: "0.00"

        - value: "4"
          price: "4.00"

        - value: "8"
          price: "8.00"

        - value: "12"
          price: "12.00"

        - value: "16"
          price: "16.00"

        - value: "18"
          price: "18.00"

        - value: "22"
          price: "22.00"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 10.00
---
