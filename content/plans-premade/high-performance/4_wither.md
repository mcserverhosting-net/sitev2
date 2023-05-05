---
title: "Wither"
draft: false
category: "High Performance"
weight: 2

product:
  id: "wither"
  name: "Wither"
  price: "16.80"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "40 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 4

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 20
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 50
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 16.80
---